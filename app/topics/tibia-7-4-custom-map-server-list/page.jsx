import Tibia74CustomMapServerListKeywordPage, { generateMetadata } from './tibia-7-4-custom-map-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74CustomMapServerListKeywordPage />;
}
