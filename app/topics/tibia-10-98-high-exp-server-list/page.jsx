import Tibia1098HighExpServerListKeywordPage, { generateMetadata } from './tibia-10-98-high-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098HighExpServerListKeywordPage />;
}
