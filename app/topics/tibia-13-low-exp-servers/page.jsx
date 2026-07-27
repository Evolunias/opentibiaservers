import Tibia13LowExpServersKeywordPage, { generateMetadata } from './tibia-13-low-exp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13LowExpServersKeywordPage />;
}
