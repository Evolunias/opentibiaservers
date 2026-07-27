import Tibia81LowExpServerListKeywordPage, { generateMetadata } from './tibia-8-1-low-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81LowExpServerListKeywordPage />;
}
