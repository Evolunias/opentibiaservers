import Tibia81LowExpServerKeywordPage, { generateMetadata } from './tibia-8-1-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81LowExpServerKeywordPage />;
}
