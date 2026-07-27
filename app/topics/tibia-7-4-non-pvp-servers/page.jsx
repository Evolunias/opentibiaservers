import Tibia74NonPvpServersKeywordPage, { generateMetadata } from './tibia-7-4-non-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74NonPvpServersKeywordPage />;
}
