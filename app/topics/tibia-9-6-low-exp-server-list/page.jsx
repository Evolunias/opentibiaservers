import Tibia96LowExpServerListKeywordPage, { generateMetadata } from './tibia-9-6-low-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96LowExpServerListKeywordPage />;
}
