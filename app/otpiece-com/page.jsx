import OtpieceComPage, { generateMetadata } from './otpiece-com';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtpieceComPage />;
}
