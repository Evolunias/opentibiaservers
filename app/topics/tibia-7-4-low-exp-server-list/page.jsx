import Tibia74LowExpServerListKeywordPage, { generateMetadata } from './tibia-7-4-low-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74LowExpServerListKeywordPage />;
}
