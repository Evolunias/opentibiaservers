import Tibia76LowExpServersKeywordPage, { generateMetadata } from './tibia-7-6-low-exp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76LowExpServersKeywordPage />;
}
