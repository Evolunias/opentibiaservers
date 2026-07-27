import Tibia12LowExpServersKeywordPage, { generateMetadata } from './tibia-12-low-exp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12LowExpServersKeywordPage />;
}
