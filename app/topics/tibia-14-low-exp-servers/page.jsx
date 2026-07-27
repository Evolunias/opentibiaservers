import Tibia14LowExpServersKeywordPage, { generateMetadata } from './tibia-14-low-exp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14LowExpServersKeywordPage />;
}
