import Tibia14LowExpServerListKeywordPage, { generateMetadata } from './tibia-14-low-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14LowExpServerListKeywordPage />;
}
