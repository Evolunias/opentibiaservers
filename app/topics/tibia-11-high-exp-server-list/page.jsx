import Tibia11HighExpServerListKeywordPage, { generateMetadata } from './tibia-11-high-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11HighExpServerListKeywordPage />;
}
