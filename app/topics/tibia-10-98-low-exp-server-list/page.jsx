import Tibia1098LowExpServerListKeywordPage, { generateMetadata } from './tibia-10-98-low-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098LowExpServerListKeywordPage />;
}
