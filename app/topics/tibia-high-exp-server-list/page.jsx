import TibiaHighExpServerListKeywordPage, { generateMetadata } from './tibia-high-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaHighExpServerListKeywordPage />;
}
