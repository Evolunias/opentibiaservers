import Tibia76LowExpServerKeywordPage, { generateMetadata } from './tibia-7-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76LowExpServerKeywordPage />;
}
