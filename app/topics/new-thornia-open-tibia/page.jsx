import NewThorniaOpenTibiaKeywordPage, { generateMetadata } from './new-thornia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThorniaOpenTibiaKeywordPage />;
}
