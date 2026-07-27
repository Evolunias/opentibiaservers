import Tibia84LowExpServerListKeywordPage, { generateMetadata } from './tibia-8-4-low-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84LowExpServerListKeywordPage />;
}
