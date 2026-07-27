import Tibia15LowExpServerKeywordPage, { generateMetadata } from './tibia-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15LowExpServerKeywordPage />;
}
