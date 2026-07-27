import Tibia15LowExpServersKeywordPage, { generateMetadata } from './tibia-15-low-exp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15LowExpServersKeywordPage />;
}
