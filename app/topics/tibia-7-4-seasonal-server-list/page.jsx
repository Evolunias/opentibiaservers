import Tibia74SeasonalServerListKeywordPage, { generateMetadata } from './tibia-7-4-seasonal-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74SeasonalServerListKeywordPage />;
}
