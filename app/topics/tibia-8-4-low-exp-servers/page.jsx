import Tibia84LowExpServersKeywordPage, { generateMetadata } from './tibia-8-4-low-exp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84LowExpServersKeywordPage />;
}
