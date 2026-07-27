import Tibia81LowExpServersKeywordPage, { generateMetadata } from './tibia-8-1-low-exp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81LowExpServersKeywordPage />;
}
