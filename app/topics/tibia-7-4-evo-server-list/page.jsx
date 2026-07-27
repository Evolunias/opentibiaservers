import Tibia74EvoServerListKeywordPage, { generateMetadata } from './tibia-7-4-evo-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74EvoServerListKeywordPage />;
}
