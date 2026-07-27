import Tibia71LowExpServerListKeywordPage, { generateMetadata } from './tibia-7-1-low-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71LowExpServerListKeywordPage />;
}
