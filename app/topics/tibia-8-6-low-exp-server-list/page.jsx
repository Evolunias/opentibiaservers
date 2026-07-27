import Tibia86LowExpServerListKeywordPage, { generateMetadata } from './tibia-8-6-low-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86LowExpServerListKeywordPage />;
}
