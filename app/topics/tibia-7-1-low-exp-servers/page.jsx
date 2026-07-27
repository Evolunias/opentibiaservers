import Tibia71LowExpServersKeywordPage, { generateMetadata } from './tibia-7-1-low-exp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71LowExpServersKeywordPage />;
}
