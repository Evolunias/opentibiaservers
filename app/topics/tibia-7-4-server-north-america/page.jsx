import Tibia74ServerNorthAmericaKeywordPage, { generateMetadata } from './tibia-7-4-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74ServerNorthAmericaKeywordPage />;
}
