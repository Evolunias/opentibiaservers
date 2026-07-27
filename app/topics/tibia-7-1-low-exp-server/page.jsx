import Tibia71LowExpServerKeywordPage, { generateMetadata } from './tibia-7-1-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71LowExpServerKeywordPage />;
}
