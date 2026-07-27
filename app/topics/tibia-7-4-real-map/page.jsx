import Tibia74RealMapKeywordPage, { generateMetadata } from './tibia-7-4-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74RealMapKeywordPage />;
}
