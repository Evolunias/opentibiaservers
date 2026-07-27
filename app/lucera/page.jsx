import LuceraPage, { generateMetadata } from './lucera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LuceraPage />;
}
