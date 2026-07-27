import Tibia12LowExpServerListKeywordPage, { generateMetadata } from './tibia-12-low-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12LowExpServerListKeywordPage />;
}
