import Tibia854LowExpServerListKeywordPage, { generateMetadata } from './tibia-8-54-low-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854LowExpServerListKeywordPage />;
}
