import OtitemeditorPage, { generateMetadata } from './otitemeditor';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtitemeditorPage />;
}
