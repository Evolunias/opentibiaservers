import Tibia15LowExpServerListKeywordPage, { generateMetadata } from './tibia-15-low-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15LowExpServerListKeywordPage />;
}
