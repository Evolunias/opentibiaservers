import Tibia76LowExpServerListKeywordPage, { generateMetadata } from './tibia-7-6-low-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76LowExpServerListKeywordPage />;
}
