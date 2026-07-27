import NoxiousotStatusKeywordPage, { generateMetadata } from './noxiousot-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotStatusKeywordPage />;
}
