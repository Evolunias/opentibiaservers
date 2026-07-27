import Tibia86LowExpServersKeywordPage, { generateMetadata } from './tibia-8-6-low-exp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86LowExpServersKeywordPage />;
}
