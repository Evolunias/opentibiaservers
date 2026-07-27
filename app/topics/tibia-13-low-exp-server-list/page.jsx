import Tibia13LowExpServerListKeywordPage, { generateMetadata } from './tibia-13-low-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13LowExpServerListKeywordPage />;
}
