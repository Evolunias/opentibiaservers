import Tibia74HighExpServerListKeywordPage, { generateMetadata } from './tibia-7-4-high-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74HighExpServerListKeywordPage />;
}
