import Tibia74OtServerKeywordPage, { generateMetadata } from './tibia-7-4-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74OtServerKeywordPage />;
}
