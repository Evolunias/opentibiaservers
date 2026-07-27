import NewRealeraTibiaKeywordPage, { generateMetadata } from './new-realera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealeraTibiaKeywordPage />;
}
