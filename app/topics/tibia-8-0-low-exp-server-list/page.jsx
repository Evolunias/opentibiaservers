import Tibia80LowExpServerListKeywordPage, { generateMetadata } from './tibia-8-0-low-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80LowExpServerListKeywordPage />;
}
