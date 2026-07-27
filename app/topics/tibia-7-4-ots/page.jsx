import Tibia74OtsKeywordPage, { generateMetadata } from './tibia-7-4-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74OtsKeywordPage />;
}
