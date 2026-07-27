import ValoriaTibiaWorldKeywordPage, { generateMetadata } from './valoria-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ValoriaTibiaWorldKeywordPage />;
}
