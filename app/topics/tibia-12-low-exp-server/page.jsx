import Tibia12LowExpServerKeywordPage, { generateMetadata } from './tibia-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12LowExpServerKeywordPage />;
}
