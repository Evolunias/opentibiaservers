import Tibia74ClientOtKeywordPage, { generateMetadata } from './tibia-7-4-client-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74ClientOtKeywordPage />;
}
