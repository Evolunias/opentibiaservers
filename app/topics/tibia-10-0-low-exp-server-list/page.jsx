import Tibia100LowExpServerListKeywordPage, { generateMetadata } from './tibia-10-0-low-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100LowExpServerListKeywordPage />;
}
