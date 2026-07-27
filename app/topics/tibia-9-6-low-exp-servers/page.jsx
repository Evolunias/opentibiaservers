import Tibia96LowExpServersKeywordPage, { generateMetadata } from './tibia-9-6-low-exp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96LowExpServersKeywordPage />;
}
