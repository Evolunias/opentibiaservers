import Tibia100LowExpServersKeywordPage, { generateMetadata } from './tibia-10-0-low-exp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100LowExpServersKeywordPage />;
}
