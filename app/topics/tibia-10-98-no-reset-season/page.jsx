import Tibia1098NoResetSeasonKeywordPage, { generateMetadata } from './tibia-10-98-no-reset-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098NoResetSeasonKeywordPage />;
}
