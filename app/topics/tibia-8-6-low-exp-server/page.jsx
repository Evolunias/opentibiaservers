import Tibia86LowExpServerKeywordPage, { generateMetadata } from './tibia-8-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86LowExpServerKeywordPage />;
}
