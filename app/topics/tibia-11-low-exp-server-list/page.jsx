import Tibia11LowExpServerListKeywordPage, { generateMetadata } from './tibia-11-low-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11LowExpServerListKeywordPage />;
}
